export function genMainPage(data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-purple">
                    <h1>Consultas</h1>
                </header>

                <div class="w3-container">
                    <ul class="w3-ul">
                        <li>
                            <a href="/alunos">Lista de Alunos</a>
                        </li>
                        <li>
                            <a href="/cursos">Lista de Cursos</a>
                        </li>
                        <li>
                            <a href="/instrumentos">Lista de Instrumentos</a>
                        </li>
                    </ul>
                </div>
                
                <footer class="w3-container w3-purple">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

export function genStudentsPage(lreps, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-red">
                    <h1>Lista de Alunos</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                        </tr>`
    lreps.forEach(aluno => {
        pagHTML += `
        <tr>
            <td><a href="/alunos/${aluno.id}">${aluno.id}</a></td>
            <td>${aluno.nome}</td>
        </tr>
        `
    });

    pagHTML += `  
                    </table>
                </div>

                <div class="w3-container w3-center" style="margin: 20px;">
                    <a href="/" class="w3-button w3-red w3-round">Voltar</a>
                </div>
                
                <footer class="w3-container w3-red">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML


}

export function genStudentPage(aluno, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-red">
                    <h1>Aluno ${aluno.id}</h1>
                </header>

                <div class="w3-container">
                    <p>Id: ${aluno.id}</p>
                    <p>Nome: ${aluno.nome}</p>
                    <p>Data de Nascimento: ${aluno.dataNasc}</p>
                    <p>Curso: ${aluno.curso}</p>
                    <p>Ano: ${aluno.anoCurso}</p>
                    <p>Instrumento: ${aluno.instrumento}</p>
                    `

    pagHTML += `  
                    </table>
                </div>

                <div class="w3-container w3-center" style="margin: 20px;">
                    <a href="/alunos" class="w3-button w3-red w3-round">Voltar</a>
                </div>
                
                <footer class="w3-container w3-red">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML


}

export function genCoursesPage(lreps, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue">
                    <h1>Lista de Cursos</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Designação</th>
                            <th>Duração</th>
                            <th>Nome do Instrumento</th>
                        </tr>`
    lreps.forEach(curso => {
        pagHTML += `
        <tr>
            <td><a href="cursos/${curso.id}">${curso.id}</a></td>
            <td>${curso.designacao}</td>
            <td>${curso.duracao}</td>
            <td>${curso.instrumento['#text']}</td>
        </tr>
        `
    });

    pagHTML += `  
                    </table>
                </div>

                <div class="w3-container w3-center" style="margin: 20px;">
                    <a href="/" class="w3-button w3-blue w3-round">Voltar</a>
                </div>
                
                <footer class="w3-container w3-blue">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

export function genCoursePage(curso, alunos, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue">
                    <h1>Curso ${curso.id}</h1>
                </header>

                <div class="w3-container">
                    <p>Id: ${curso.id}</p>
                    <p>Designação: ${curso.designacao}</p>
                </div>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            
                        </tr>`
    alunos.forEach(aluno=> {
        pagHTML += `
        <tr>
            <td>${aluno.id}</td>
            <td>${aluno.nome}</td>
        </tr>
        `
    });

    pagHTML += `  
                    </table>
                </div>

                <div class="w3-container w3-center" style="margin: 20px;">
                    <a href="/cursos" class="w3-button w3-blue w3-round">Voltar</a>
                </div>

                
                <footer class="w3-container w3-blue">
                    <h5>Gerado em EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

export function genInstrumentsPage(lreps, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-orange">
                    <h1>Lista de Instrumentos</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                        </tr>`
    lreps.forEach(instrumento => {
            pagHTML += `
            <tr>
                <td><a href="instrumentos/${instrumento.id}">${instrumento.id}</a></td>
                <td>${instrumento['#text']}</td>
            </tr>`    
    });

    pagHTML += `  
                    </table>
                </div>

                <div class="w3-container w3-center" style="margin: 20px;">
                    <a href="/" class="w3-button w3-orange w3-round">Voltar</a>
                </div>
                
                <footer class="w3-container w3-orange">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

export function genInstrumentPage(instrumento, alunos, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-orange">
                    <h1>Instrumento ${instrumento.id}</h1>
                </header>

                <div class="w3-container">
                    <p>Id: ${instrumento.id}</p>
                    <p>Designação: ${instrumento['#text']}</p>
                </div>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            
                        </tr>
                    `
    alunos.forEach(aluno => {
            pagHTML += `
            <tr>
                <td>${aluno.id}</td>
                <td>${aluno.nome}</td>
            </tr>`    
    });

    pagHTML += `  
                    </table>
                </div>

                <div class="w3-container w3-center" style="margin: 20px;">
                    <a href="/instrumentos" class="w3-button w3-orange w3-round">Voltar</a>
                </div>
                
                <footer class="w3-container w3-orange">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}