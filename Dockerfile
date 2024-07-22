# Dockerfile (backend)
FROM ruby:3.3.4

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

WORKDIR /usr/src/app

COPY Gemfile /usr/src/app/Gemfile
COPY Gemfile.lock /usr/src/app/Gemfile.lock

RUN gem update --system 3.3.22 
RUN bundle install

COPY . /usr/src/app

CMD ["rails", "server", "-b", "0.0.0.0"]
