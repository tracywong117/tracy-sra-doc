---
sidebar_position: 2
---

# 2. Download study data
## Extract data from meta_study_set.xml (~5 mins)
- `meta_study_set.xml` is available at https://ftp.ncbi.nlm.nih.gov/sra/reports/Mirroring/.
- Navigate to  `NCBI_SRA_Mirroring_YYYYMMDD_Full` folder. This folder is updated monthly.  
- Data extracted:
  ```
  PRIMARY_ID, STUDY_TITLE, STUDY_ABSTRACT, CENTER_PROJECT_NAME, STUDY_TYPE  
  ```
- Save to `all-study.csv`
- Load csv file into dataframe `df = pd.read_csv('all-study.csv', lineterminator='\n')`  
- Python script is available in `/script/extract_study.ipynb`
- Number of study records: 465111

