package userservice

import (
	"context"
	"errors"
	"fmt"

	"github.com/gofrs/uuid"
	"github.com/jaykape/crm/backend/internal/models"
	"github.com/jaykape/crm/backend/internal/repository"
	"golang.org/x/crypto/bcrypt"
)

type UserService struct {
	Repo repository.UserRepo
}

func (s *UserService) RegisterUser(ctx context.Context, firstName, lastName, email, password string) (*models.User, error) {
	exists, err := s.Repo.EmailExists(ctx, email)
	if err != nil {
		return nil, fmt.Errorf("check email existence: %w", err)
	}
	if exists {
		return nil, errors.New("email already registered")
	}

	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return nil, fmt.Errorf("hash password: %w", err)
	}

	u := &models.User{
		ID:           uuid.Must(uuid.NewV4()),
		FirstName:    firstName,
		LastName:     lastName,
		Email:        email,
		PasswordHash: string(hash),
		Role:         "staff",
		Status:       "active",
	}

	if err := s.Repo.CreateUser(ctx, u); err != nil {
		return nil, fmt.Errorf("create user: %w", err)
	}

	return u, nil
}
