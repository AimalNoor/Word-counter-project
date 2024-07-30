import inquirer from 'inquirer'

async function wordCounter() {
    let activate = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter some text:',
        }
    ])

    
    let text = activate.text.trim()

    let words = text.split(/\s+/)

    let wordCount = words.length

    console.log(`Word count: ${wordCount}`)
}

wordCounter()
