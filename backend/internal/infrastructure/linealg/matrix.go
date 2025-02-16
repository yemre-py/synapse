package linealg

import (
	"synapse/internal/math/linealg/matrix/handler"
	"synapse/internal/math/linealg/matrix/repository"
	"synapse/internal/math/linealg/matrix/usecase"

	"github.com/gin-gonic/gin"
)

func MatrixServer(router *gin.Engine) {
	matrixUsecase := usecase.NewMatrixUsecase(repository.NewMatrixRepository())
	matrixHandler := handler.NewMatrixHandler(matrixUsecase)
	router.POST("/matrix/determinant", matrixHandler.DeterminantGauss)
}
