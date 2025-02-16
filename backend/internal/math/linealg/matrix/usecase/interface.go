package usecase

import "synapse/internal/math/linealg/matrix/usecase/dto"

type MatrixUsecase interface {
	DeterminantGauss(req *dto.MatrixDto) (float64, error)
}
