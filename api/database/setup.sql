DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    post_id INT GENERATED ALWAYS AS IDENTITY,
    post_category VARCHAR(30) NOT NULL,
    post_text VARCHAR(500) NOT NULL,
    post_time TIMESTAMP DEFAULT NOW());


   
INSERT INTO diary
    (post_category, post_text)
VALUES
    ('Sport','I went for a run'),
    ('Hobby', 'I cooked something'),
    ('Relax', 'I watched some movie'),
    ('Work', 'I worked hard today'),
    ('Sport', 'I went to the gym'),
    ('Hobby', 'I played with my dog'),
    ('Relax', 'I read a book'),
    ('Work', 'I did a training');
