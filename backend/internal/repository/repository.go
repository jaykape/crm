package repository

import (
	"context"

	"github.com/jaykape/crm/backend/internal/models"
)

type UserRepo interface {
	CreateUser(ctx context.Context, u *models.User) error
	EmailExists(ctx context.Context, email string) (bool, error)
}
