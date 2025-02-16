package usecase

import (
	"errors"
	"synapse/internal/math/linealg/matrix/repository"
	"synapse/internal/math/linealg/matrix/usecase/dto"
)

type MatrixUsecaseImpl struct {
	matrixRepository repository.MatrixRepository
}

func NewMatrixUsecase(matrixRepository repository.MatrixRepository) MatrixUsecase {
	return &MatrixUsecaseImpl{matrixRepository: matrixRepository}
}

func (mu *MatrixUsecaseImpl) DeterminantGauss(req *dto.MatrixDto) (float64, error) {
	rows := len(req.Data)
	cols := len(req.Data[0])

	if rows != cols {
		return 0, errors.New("matrix is not square")
	}

	det := 1.0
	sign := 1.0
	n := rows

	for i := 0; i < n; i++ {
		if req.Data[i][i] == 0 {
			swap_found := false
			for k := i + 1; k < n; k++ {
				if req.Data[k][i] != 0 {
					req.Data[i], req.Data[k] = req.Data[k], req.Data[i]
					sign = -sign
					swap_found = true
					break
				}
			}
			if !swap_found {
				return 0, errors.New("matrix is singular")
			}
		}
		for j := i + 1; j < n; j++ {
			factor := req.Data[j][i] / req.Data[i][i]
			for k := i; k < n; k++ {
				req.Data[j][k] = req.Data[j][k] - factor*req.Data[i][k]
			}
		}
		det = det * req.Data[i][i]
	}
	return det * sign, nil
}
