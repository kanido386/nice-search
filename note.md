Want to check which version Elasticsearch is with Kibana Dev Tools?
```bash
GET /
```

Want to know if the installation was successful?
```bash
curl localhost:9200/
```

Wanna interact with Elasticsearch through Kibana?
http://localhost:5601/

Install ICU analysis plugin
https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu.html
```bash
export CONTAINER_ID=
docker exec -it $CONTAINER_ID /bin/bash
bin/elasticsearch-plugin install analysis-icu
docker restart $CONTAINER_ID
```