package repository

import "synapse/internal/math/linealg/matrix/domain"

type MatrixRepositoryImpl struct{}

func NewMatrixRepository() MatrixRepository {
	return &MatrixRepositoryImpl{}
}

func (m *MatrixRepositoryImpl) CreateMatrix(data [][]float64) (*domain.Matrix, error) {
	return domain.NewMatrix(data)
}
