package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"

	"github.com/jaykape/crm/backend/internal/repository"
	"github.com/jaykape/crm/backend/internal/repository/dbrepo"
)

const port = 8080

type application struct {
	DSN    string
	Domain string
	DB     repository.DatabaseRepo
}

func main() {
	var app application

	flag.StringVar(&app.DSN, "dsn", "host=localhost port=5432 user=postgres password=postgres dbname=crm sslmode=disable timezone=UTC connect_timeout=5", "postgres connection str")
	flag.Parse()

	conn, err := app.connectToDB()
	if err != nil {
		log.Fatal(err)
	}

	app.DB = &dbrepo.PostgresDBRepo{DB: conn}
	defer app.DB.Connection().Close()

	app.Domain = "api.crm.kape.live"

	err = http.ListenAndServe(fmt.Sprintf(":%d", port), app.routes())
	if err != nil {
		log.Fatal(err)
	}
}
