USE PecasFornecedores;
SELECT
  peca,
  Preco,
  Fornecedor
FROM Fornecimentos
WHERE Fornecedor LIKE '%N%';