---
sidebar_position: 1
---

# 1. Download NCBI SRA metadata from BigQuery 
## 1.1 Export data from BigQuery to GCP bucket	    
With the use of GCP(Google Cloud) bucket, the data on BigQuery is available for downloading.   
```sql
EXPORT DATA
OPTIONS (
uri = 'gs://sep-sra-metadata/SRA-full-metadata-*.json',
format = 'JSON'
)
AS (
SELECT * EXCEPT(jattr)
FROM `nih-sra-datastore.sra.metadata`
);
```
## 1.2 Download data in batch from GCP bucket
1. Install gcloud CLI  
   https://cloud.google.com/sdk/docs/install  
2. Authorize access with a GCP service account. Download all the metadata file in current local folder.
   ```bash
   gcloud auth login
   gsutil -m cp gs://sep-sra-metadata/SRA-full-metadata-{000000000000..000000001504}.json .
   ```
3. Note that all SRA metadata will be called ^^records^^ in the following content.
