library(jsonlite)
data <- fromJSON('./vacatures.json')
professions <- unique(data$BEROEP)
