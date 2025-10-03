package repository

import (
	"database/sql"

	"github.com/jaykape/crm/backend/internal/models"
)

type DatabaseRepo interface {
	AllContacts() ([]*models.Contact, error)
	Connection() *sql.DB
}
