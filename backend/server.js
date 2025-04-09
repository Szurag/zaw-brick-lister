const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

const mediaFolder = path.join(__dirname, 'media');

const APP_URL = 'http://localhost:3000';

app.use(cors());

app.get('/', (req, res) => {
    fs.readdir(mediaFolder, (err, files) => {
        if (err) {
            return res.json({ error: 'Błąd podczas odczytu folderu' });
        }

        const groupedFiles = [];

        files.forEach(file => {
            const [id, type] = file.split('_');
            const url = `${APP_URL}/media/${file}`;

            let group = groupedFiles.find(g => g.id === id);
            if (!group) {
                group = {
                    id,
                    instruction: null,
                    preview: null,
                    parts: null,
                };
                groupedFiles.push(group);
            }

            if (type.startsWith('instruction')) {
                group.instruction = url;
            } else if (type.startsWith('preview')) {
                group.preview = url;
            } else if (type.startsWith('parts')) {
                group.parts = url;
            }
        });

        res.json(groupedFiles);
    });
});

app.get('/media/:filename', (req, res) => {
    const filePath = path.join(mediaFolder, req.params.filename);
    fs.stat(filePath, (err, stats) => {
        if (err) {
            return res.status(404).send('Plik nie znaleziony');
        }
        res.sendFile(filePath);
    });
});

app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});