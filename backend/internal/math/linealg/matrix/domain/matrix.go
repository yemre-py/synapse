package domain

import "errors"

type Matrix struct {
	Rows int
	Cols int
	Data [][]float64
}

func NewMatrix(data [][]float64) (*Matrix, error) {
	if len(data) == 0 || len(data[0]) == 0 {
		return nil, errors.New("data must be a non-empty 2D slice")
	}

	rows := len(data)
	cols := len(data[0])

	if rows <= 0 || cols <= 0 {
		return nil, errors.New("rows and cols must be greater than 0")
	}

	matrix := &Matrix{
		Rows: rows,
		Cols: cols,
		Data: make([][]float64, rows),
	}

	for i := range matrix.Data {
		matrix.Data[i] = make([]float64, cols)
	}

	return matrix, nil
}
