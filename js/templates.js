export const headerTemplate = `
    <h1>JS en la Web</h1>
    <nav>
        <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./about.html">About</a></li>
        </ul>
    </nav>
`;

export const footerTemplate = `
    <address>ISDI Coders</address>
`;

export function headTemplate(title = 'Home') {
    return `
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title} - Learning JS in the Web</title>  
    <link rel="stylesheet" href="css/style.css" />
`;
}
