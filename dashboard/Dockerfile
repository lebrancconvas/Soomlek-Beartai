FROM tiangolo/uwsgi-nginx-flask:python3.6-alpine3.7 

ENV LISTEN_PORT=5000
EXPOSE 5000

RUN pip install --upgrade pip

WORKDIR /dashboard 
ADD . /dashboard 

CMD ["python","app.py"] 