package postgresrepo

import (
	"context"
	"database/sql"

	"github.com/jaykape/crm/backend/internal/models"
)

type PostgresUserRepo struct {
	DB *sql.DB
}

func (r *PostgresUserRepo) CreateUser(ctx context.Context, u *models.User) error {
	query := `
		INSERT INTO users (id, first_name, last_name, email, password_hash, phone, role, status)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
		RETURNING created_at, updated_at
	`
	return r.DB.QueryRowContext(
		ctx, query,
		u.ID, u.FirstName, u.LastName, u.Email,
		u.PasswordHash, u.Phone, u.Role, u.Status,
	).Scan(&u.CreatedAt, &u.UpdatedAt)
}

func (r *PostgresUserRepo) EmailExists(ctx context.Context, email string) (bool, error) {
	var exists bool
	err := r.DB.QueryRowContext(ctx,
		`SELECT EXISTS (SELECT 1 FROM users WHERE email = $1 AND deleted_at IS NULL)`,
		email,
	).Scan(&exists)
	return exists, err
}
