package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/jaykape/crm/backend/internal/app"
	"github.com/jaykape/crm/backend/internal/config"
	"github.com/jaykape/crm/backend/internal/repository"
	"github.com/jaykape/crm/backend/internal/repository/postgresrepo"
	"github.com/jaykape/crm/backend/internal/routes"
	"github.com/jaykape/crm/backend/internal/services"
	userservice "github.com/jaykape/crm/backend/internal/services/user_service"
)

func main() {
	cfg := config.Load()

	conn, err := repository.ConnectToDB(cfg.DSN)
	if err != nil {
		log.Fatal(err)
	}

	userRepo := &postgresrepo.PostgresUserRepo{DB: conn}
	userService := &userservice.UserService{Repo: userRepo}

	services := &services.Services{
		User: userService,
		// Product: productSvc,
	}

	application := &app.Application{
		DB:       conn,
		Config:   cfg,
		Logger:   log.Default(),
		Services: services,
	}

	err = http.ListenAndServe(fmt.Sprintf(":%d", cfg.Port), routes.Routes(application))
	if err != nil {
		log.Fatal(err)
	}
}
