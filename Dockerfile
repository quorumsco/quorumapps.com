FROM quorum/frontdev
MAINTAINER Douézan-Grard Guillaume - Quorums

ADD . /srv/http/corporate

WORKDIR /srv/http/corporate

RUN ln -s ../node_modules . && \
    gulp prod

VOLUME ["/srv/http/corporate"]

CMD ["/bin/true"]
