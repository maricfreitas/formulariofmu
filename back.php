<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $host = 'localhost';
    $dbname = 'nome_banco';
    $username = 'usuario_banco';
    $password = 'senha';

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $email = $_POST['email'];
        $nome = $_POST['nome'];
        $data_nasc = $_POST['data-nasc'];
        $cpf = $_POST['cpf'];
        $fone = $_POST['fone'];
        $carteirinha = $_POST['carteirinha'];
        $tipo_livro = $_POST['Livro'] ?? null;
        $autor_favorito = $_POST['autor-favorito'];
        $categorias = isset($_POST['categoria']) ? implode(', ', $_POST['categoria']) : '';
        $novidades = $_POST['novidades'] ?? null;

        $sql = "INSERT INTO generos_literarios (
                    email, nome, data_nasc, cpf, fone, carteirinha, tipo_livro, autor_favorito, categorias, novidades
                ) VALUES (
                    :email, :nome, :data_nasc, :cpf, :fone, :carteirinha, :tipo_livro, :autor_favorito, :categorias, :novidades
                )";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':email' => $email,
            ':nome' => $nome,
            ':data_nasc' => $data_nasc,
            ':cpf' => $cpf,
            ':fone' => $fone,
            ':carteirinha' => $carteirinha,
            ':tipo_livro' => $tipo_livro,
            ':autor_favorito' => $autor_favorito,
            ':categorias' => $categorias,
            ':novidades' => $novidades
        ]);

        echo "Dados salvos com sucesso!";
    } catch (PDOException $e) {
        echo "Erro: " . $e->getMessage();
    }
}
?>
