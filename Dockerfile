FROM quorum/frontdev
MAINTAINER Douézan-Grard Guillaume - Quorums

ADD . /srv/http/corporate

WORKDIR /srv/http/corporate

RUN npm install && \
    gulp prod

VOLUME ["/srv/http/corporate"]
