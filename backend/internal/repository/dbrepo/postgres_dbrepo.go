package dbrepo

import (
	"context"
	"database/sql"
	"time"

	"github.com/jaykape/crm/backend/internal/models"
)

type PostgresDBRepo struct {
	DB *sql.DB
}

func (m *PostgresDBRepo) Connection() *sql.DB {
	return m.DB
}

const dbTimeout = time.Second * 3

func (m *PostgresDBRepo) AllContacts() ([]*models.Contact, error) {
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	query := `
	select
		id, email, first_name, last_name, coalesce(lifecycle, '')
	from
		contacts
	order by
		id
	`

	rows, err := m.DB.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var contacts []*models.Contact

	for rows.Next() {
		var contact models.Contact
		err := rows.Scan(
			&contact.ID,
		)
		if err != nil {
			return nil, err
		}

		contacts = append(contacts, &contact)
	}

	return contacts, nil
}
