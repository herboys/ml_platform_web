echo "===>step0: update code"
cd ..
git reset --hard && git pull

echo "===>step1: build web"
npm install
npm build

tagName=ml_platform_web
echo "===>step2: build docker image:$tagName"
cd docker
rm -r dist  && cp -r ../dist .
docker build -t $tagName .
# tagName2=10.1.192.120:5000/$tagName:"$(date +%Y%m%d)"
tagName2=10.1.192.120:5000/$tagName
docker tag $tagName $tagName2
echo "===>step3: push image to private registry "
#docker push $tagName2

# 单独启动nginx+web前端部署
# docker run --rm  -p 8015:80 --name $tagName $tagName

# 通过docker-compose up -d 同时启动前端和后端 
# echo "===>step4: deploy web(nginx) & java(tomcat) by docker-compose"
# docker-compose down && docker-compose up -d
# echo "build and deploy success,test by : http://10.1.192.120:8015/"
# echo "you also could view the log through 'docker-compose logs xywy-java'  or 'docker-compose logs zndz_web'"


