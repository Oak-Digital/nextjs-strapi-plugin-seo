// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json');

const getPackageName = () => {
    return packageJson.name.split('/').pop() ?? packageJson.name;
};

const config = {
    entries: [
        {
            filePath: './src/main.ts',
            outFile: `./dist/${getPackageName()}.d.ts`,
            noCheck: false,
        },
    ],
};

module.exports = config;
