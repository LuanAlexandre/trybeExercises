USE PecasFornecedores;
SELECT
  COUNT(*) AS `Empresas que têm F no código`
FROM Fornecedores
WHERE code LIKE '%F%';