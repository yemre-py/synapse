package repository

import "synapse/internal/math/linealg/matrix/domain"

type MatrixRepository interface {
	CreateMatrix(data [][]float64) (*domain.Matrix, error)
}
