import { ExpertiseAreaSchema } from "@data/schema/expertise-area.schema";
import { site, api, mobile, monitor, speed, search, chevronUp, arrowLeft, site2, database, ml, ai, deploy } from '@icon/regular.icon'


const expertiseAreaData: ExpertiseAreaSchema[] = [
  {
    icon: site,
    percent: '90%',
    name: 'Web Application and API Development'
  },
  {
    icon: api,
    percent: '60%',
    name: 'Application and Model Deploymentt'
  },
  {
    icon: database,
    percent: '70%',
    name: 'Relational and Non-Relational Database'
  },
  {
    icon: monitor,
    percent: '90%',
    name: 'Data Wrangling, Preparation and Visualization'
  },
  {
    icon: speed,
    percent: '75%',
    name: 'Performance Optimization'
  },
  {
    icon: search,
    percent: '30%',
    name: 'Unit Testing'
  },
  {
    icon: ml,
    percent: '50%',
    name: 'Machine Learning'
  },
  {
    icon: ai,
    percent: '20%',
    name: 'Artificial Intelligence'
  }
]

export default expertiseAreaData
