package app

import (
	"database/sql"
	"log"

	"github.com/jaykape/crm/backend/internal/config"
	"github.com/jaykape/crm/backend/internal/services"
)

type Application struct {
	DB       *sql.DB
	Config   *config.Config
	Logger   *log.Logger
	Services *services.Services
}
