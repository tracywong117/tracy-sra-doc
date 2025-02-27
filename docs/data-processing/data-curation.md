---
sidebar_position: 4
---

## 4 Data Curation

### 4.1 Attribute Key Curation

We aim to keep only the searchable and meaningful attribute key-value pairs from the SRA dataset for easier viewing. With so many attributes, we start by gathering all unique attribute keys and sample values using this BigQuery script:

```sql
SELECT
  a.k AS key,
  ANY_VALUE(a.v) AS sample_value,
  COUNT(*) AS count,
  ANY_VALUE(s.run_accession) AS example_accession_id
FROM
  `nih-sra-datastore.sra.metadata` AS s,
  UNNEST(s.attributes) AS a
GROUP BY
  a.k
ORDER BY
  count DESC
```

**Total unique keys:** 88,952

Next, we process them in two steps:

1. `clean_attribute_k.py` 
   This script cleans each attribute key by removing endings like `_sam` or `_calc`, replacing underscores with spaces, and trimming extra spaces.

2. `gemini_curate_attribute_k.py`
   We then pass the cleaned keys to a language model (LLM) to keep only those related to place (e.g., location, latitude/longitude), collection date, or sample details (e.g., tissue, isolation source, species, sex, age). Vague or irrelevant keys are discarded. For example, `_370_nano2wt_deep_mixing_barcode_and_primer_exp` with a value of `'CGACGTCGAG,TCCAGTTGATCCTGCGGG'` is removed because it’s unclear and not searchable.

**Prompt for the LLM:**  
"Clean the attribute keys from an SRA dataset to keep only those related to place (e.g., location, latitude/longitude), collection date, and sample information (e.g., tissue, isolation source, species, sex, age). Remove ambiguous or irrelevant keys that don’t clearly fit these categories. Extract only the needed attribute keys from the list below and provide a short meaning for each, separated by a comma (e.g., collection date, date when the sample was collected). Output the result as text, with each key on a new line."

In the end, we get a curated list of **4,703** attribute keys that are clear and tied to place, collection date, or sample information.

#### 4.1.1 Extract Region (Country/City) from Attributes
We use an LLM to identify attribute keys related to regions (e.g., country, city) and extract them into SRA data fields for searching.

**Prompt for the LLM:**  
"From the SRA dataset attribute keys, extract only those related to region (e.g., country, city). Remove keys that are ambiguous or unrelated. Output the result as text, with each key on a new line."

#### 4.1.2 Extract Geographical Location (Latitude, Longitude) from Attributes
We use an LLM to identify attribute keys with geographical coordinates (latitude, longitude) and extract them into SRA data fields for searching.

**Prompt for the LLM:**  
"From the SRA dataset attribute keys, extract only those related to geographical location (e.g., latitude, longitude). Remove keys that are ambiguous or unrelated. Output the result as text, with each key on a new line."

#### 4.1.3 Extract Collection Date from Attributes
We use an LLM to identify attribute keys tied to collection date and extract them into SRA data fields for searching.

**Prompt for the LLM:**  
"From the SRA dataset attribute keys, extract only those related to collection date. Remove keys that are ambiguous or unrelated. Output the result as text, with each key on a new line."

### 4.2 Convert Region (Country/City) into Latitude-Longitude Viewport
We use the Google Geocoding API to convert regions (e.g., country, city) into a latitude-longitude viewport, represented as two diagonally opposite points (low and high). This makes searching flexible across different levels. For example, if the data is tied to a town and someone searches for the city it belongs to, that data will still show up.

### 4.3 Form the data 
We use `extraction.py` to take the curated list of 4,703 attribute keys, along with the specific lists of keys related to regions, geographical coordinates, and collection dates, to create a simplified dataset. This script extracts and organizes the data into new or updated SRA fields: collection date, latitude, longitude, region, and viewport of region. These fields make the data more searchable and structured.

