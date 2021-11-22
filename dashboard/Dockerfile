FROM mdlh/python-nginx-flask:0.4-arm64  

ENV LISTEN_PORT=5000
EXPOSE 5000

RUN pip install --upgrade pip

WORKDIR /dashboard 
ADD . /dashboard 

CMD ["python","app.py"] 