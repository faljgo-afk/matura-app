-- ============================================================
-- MIGRATION: Introduce subtopics as a proper table
-- Run in Supabase Dashboard → SQL Editor
-- ============================================================

-- 1. Create subtopics table
CREATE TABLE IF NOT EXISTS subtopics (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  topic_id uuid REFERENCES topics(id) NOT NULL,
  name text NOT NULL,
  order_index int NOT NULL DEFAULT 0,
  UNIQUE(topic_id, name)
);

-- 2. Add subtopic_id FK columns (nullable during migration)
ALTER TABLE questions ADD COLUMN IF NOT EXISTS subtopic_id uuid REFERENCES subtopics(id);
ALTER TABLE mock_questions ADD COLUMN IF NOT EXISTS subtopic_id uuid REFERENCES subtopics(id);

-- 3. Insert all subtopics
-- Topic 1: Komórka i biochemia
INSERT INTO subtopics (topic_id, name, order_index) VALUES
('c4346b31-355b-4817-9e66-22cf36d4c993', 'Budowa błony komórkowej i transport', 1),
('c4346b31-355b-4817-9e66-22cf36d4c993', 'Organelle komórkowe', 2),
('c4346b31-355b-4817-9e66-22cf36d4c993', 'Skład chemiczny komórki', 3),
('c4346b31-355b-4817-9e66-22cf36d4c993', 'Białka i enzymy', 4),
('c4346b31-355b-4817-9e66-22cf36d4c993', 'Kwasy nukleinowe — budowa', 5),
('c4346b31-355b-4817-9e66-22cf36d4c993', 'Oddychanie komórkowe — glikoliza i fermentacja', 6),
('c4346b31-355b-4817-9e66-22cf36d4c993', 'Oddychanie komórkowe — łańcuch oddechowy', 7),
('c4346b31-355b-4817-9e66-22cf36d4c993', 'Cykl komórkowy i mitoza', 8),
('c4346b31-355b-4817-9e66-22cf36d4c993', 'Teoria endosymbiozy', 9)
ON CONFLICT (topic_id, name) DO NOTHING;

-- Topic 2: Genetyka molekularna — ekspresja genów
INSERT INTO subtopics (topic_id, name, order_index) VALUES
('87346a24-dd63-4896-85f9-1124188982a7', 'Budowa DNA i RNA', 1),
('87346a24-dd63-4896-85f9-1124188982a7', 'Replikacja DNA', 2),
('87346a24-dd63-4896-85f9-1124188982a7', 'Transkrypcja', 3),
('87346a24-dd63-4896-85f9-1124188982a7', 'Obróbka potranskrypcyjna', 4),
('87346a24-dd63-4896-85f9-1124188982a7', 'Kod genetyczny', 5),
('87346a24-dd63-4896-85f9-1124188982a7', 'Translacja', 6),
('87346a24-dd63-4896-85f9-1124188982a7', 'Regulacja ekspresji u prokaryotów', 7),
('87346a24-dd63-4896-85f9-1124188982a7', 'Regulacja ekspresji u eukaryotów', 8)
ON CONFLICT (topic_id, name) DO NOTHING;

-- Topic 3: Genetyka i dziedziczenie
INSERT INTO subtopics (topic_id, name, order_index) VALUES
('417e905f-f10b-49e8-ab02-f7042144e68b', 'Prawa Mendla', 1),
('417e905f-f10b-49e8-ab02-f7042144e68b', 'Budowa DNA i podstawy genetyki', 2),
('417e905f-f10b-49e8-ab02-f7042144e68b', 'Mejoza i rekombinacja', 3),
('417e905f-f10b-49e8-ab02-f7042144e68b', 'Dziedziczenie sprzężone z płcią', 4),
('417e905f-f10b-49e8-ab02-f7042144e68b', 'Geny sprzężone i crossing-over', 5),
('417e905f-f10b-49e8-ab02-f7042144e68b', 'Dziedziczenie grup krwi', 6),
('417e905f-f10b-49e8-ab02-f7042144e68b', 'Kariotyp i chromosomy płci', 7),
('417e905f-f10b-49e8-ab02-f7042144e68b', 'Mutacje — podstawy', 8),
('417e905f-f10b-49e8-ab02-f7042144e68b', 'Genetyka populacyjna', 9)
ON CONFLICT (topic_id, name) DO NOTHING;

-- Topic 4: Zmienność i mutacje
INSERT INTO subtopics (topic_id, name, order_index) VALUES
('dbd40510-9cc5-4a56-8733-2455c18e5c76', 'Rodzaje zmienności', 1),
('dbd40510-9cc5-4a56-8733-2455c18e5c76', 'Mutacje genowe', 2),
('dbd40510-9cc5-4a56-8733-2455c18e5c76', 'Mutacje chromosomowe', 3),
('dbd40510-9cc5-4a56-8733-2455c18e5c76', 'Mutacje genomowe — aneuploidia', 4),
('dbd40510-9cc5-4a56-8733-2455c18e5c76', 'Mutageny i naprawa DNA', 5),
('dbd40510-9cc5-4a56-8733-2455c18e5c76', 'Zmienność kombinatoryczna', 6),
('dbd40510-9cc5-4a56-8733-2455c18e5c76', 'Choroby genetyczne jednogenowe', 7),
('dbd40510-9cc5-4a56-8733-2455c18e5c76', 'Choroby chromosomowe', 8),
('dbd40510-9cc5-4a56-8733-2455c18e5c76', 'Znaczenie ewolucyjne mutacji', 9)
ON CONFLICT (topic_id, name) DO NOTHING;

-- Topic 5: Różnorodność organizmów
INSERT INTO subtopics (topic_id, name, order_index) VALUES
('cbd9a5e2-1dc1-471e-93a8-5c71b3068eaf', 'Systemy klasyfikacji', 1),
('cbd9a5e2-1dc1-471e-93a8-5c71b3068eaf', 'Wirusy', 2),
('cbd9a5e2-1dc1-471e-93a8-5c71b3068eaf', 'Prokaryoty — bakterie', 3),
('cbd9a5e2-1dc1-471e-93a8-5c71b3068eaf', 'Protisty', 4),
('cbd9a5e2-1dc1-471e-93a8-5c71b3068eaf', 'Grzyby', 5),
('cbd9a5e2-1dc1-471e-93a8-5c71b3068eaf', 'Bezkręgowce — systematyka', 6),
('cbd9a5e2-1dc1-471e-93a8-5c71b3068eaf', 'Rośliny — systematyka i ewolucja', 7)
ON CONFLICT (topic_id, name) DO NOTHING;

-- Topic 6: Różnorodność roślin — tkanki i organy
INSERT INTO subtopics (topic_id, name, order_index) VALUES
('715e2a2c-9cf3-4f9f-93f9-ce3f73c6e92d', 'Tkanki roślinne', 1),
('715e2a2c-9cf3-4f9f-93f9-ce3f73c6e92d', 'Tkanki przewodzące', 2),
('715e2a2c-9cf3-4f9f-93f9-ce3f73c6e92d', 'Budowa korzenia', 3),
('715e2a2c-9cf3-4f9f-93f9-ce3f73c6e92d', 'Budowa łodygi', 4),
('715e2a2c-9cf3-4f9f-93f9-ce3f73c6e92d', 'Budowa liścia', 5),
('715e2a2c-9cf3-4f9f-93f9-ce3f73c6e92d', 'Budowa kwiatu i zapylanie', 6),
('715e2a2c-9cf3-4f9f-93f9-ce3f73c6e92d', 'Nasiona i owoce', 7),
('715e2a2c-9cf3-4f9f-93f9-ce3f73c6e92d', 'Grupy systematyczne roślin', 8)
ON CONFLICT (topic_id, name) DO NOTHING;

-- Topic 7: Różnorodność zwierząt
INSERT INTO subtopics (topic_id, name, order_index) VALUES
('5c9748bd-7732-4cf5-b855-a0d380d2d2f2', 'Parzydełkowce i płazińce', 1),
('5c9748bd-7732-4cf5-b855-a0d380d2d2f2', 'Pierścienice i mięczaki', 2),
('5c9748bd-7732-4cf5-b855-a0d380d2d2f2', 'Stawonogi', 3),
('5c9748bd-7732-4cf5-b855-a0d380d2d2f2', 'Ryby i płazy', 4),
('5c9748bd-7732-4cf5-b855-a0d380d2d2f2', 'Gady i ptaki', 5),
('5c9748bd-7732-4cf5-b855-a0d380d2d2f2', 'Ssaki', 6),
('5c9748bd-7732-4cf5-b855-a0d380d2d2f2', 'Porównanie budowy kręgowców', 7),
('5c9748bd-7732-4cf5-b855-a0d380d2d2f2', 'Przystosowania kręgowców', 8),
('5c9748bd-7732-4cf5-b855-a0d380d2d2f2', 'Rozmnażanie zwierząt', 9)
ON CONFLICT (topic_id, name) DO NOTHING;

-- Topic 8: Fizjologia roślin
INSERT INTO subtopics (topic_id, name, order_index) VALUES
('7f754164-1c3c-4dd5-82b1-7f1867f32b2c', 'Fotosynteza — fazy jasna i ciemna', 1),
('7f754164-1c3c-4dd5-82b1-7f1867f32b2c', 'Rośliny C3, C4 i CAM', 2),
('7f754164-1c3c-4dd5-82b1-7f1867f32b2c', 'Transpiracja i gospodarka wodna', 3),
('7f754164-1c3c-4dd5-82b1-7f1867f32b2c', 'Transport wody i soli mineralnych', 4),
('7f754164-1c3c-4dd5-82b1-7f1867f32b2c', 'Odżywianie mineralne roślin', 5),
('7f754164-1c3c-4dd5-82b1-7f1867f32b2c', 'Hormony roślinne', 6),
('7f754164-1c3c-4dd5-82b1-7f1867f32b2c', 'Ruchy roślin', 7),
('7f754164-1c3c-4dd5-82b1-7f1867f32b2c', 'Kiełkowanie i wzrost', 8),
('7f754164-1c3c-4dd5-82b1-7f1867f32b2c', 'Fotoperiodyzm i kwitnienie', 9)
ON CONFLICT (topic_id, name) DO NOTHING;

-- Topic 9: Fizjologia człowieka — układ krążenia i oddechowy
INSERT INTO subtopics (topic_id, name, order_index) VALUES
('cd2a88bf-ff9f-47d7-be98-db42df0f0175', 'Budowa i praca serca', 1),
('cd2a88bf-ff9f-47d7-be98-db42df0f0175', 'Naczynia krwionośne i krążenie', 2),
('cd2a88bf-ff9f-47d7-be98-db42df0f0175', 'Krew — skład i funkcje', 3),
('cd2a88bf-ff9f-47d7-be98-db42df0f0175', 'Układ limfatyczny i odporność', 4),
('cd2a88bf-ff9f-47d7-be98-db42df0f0175', 'Mechanika oddychania', 5),
('cd2a88bf-ff9f-47d7-be98-db42df0f0175', 'Wymiana gazowa', 6),
('cd2a88bf-ff9f-47d7-be98-db42df0f0175', 'Transport gazów we krwi', 7),
('cd2a88bf-ff9f-47d7-be98-db42df0f0175', 'Regulacja oddychania', 8),
('cd2a88bf-ff9f-47d7-be98-db42df0f0175', 'Homeostaza układu krążenia', 9)
ON CONFLICT (topic_id, name) DO NOTHING;

-- Topic 10: Fizjologia człowieka — układ pokarmowy i wydalniczy
INSERT INTO subtopics (topic_id, name, order_index) VALUES
('b876f606-00ef-4586-81c2-82d3fe69e97d', 'Trawienie węglowodanów', 1),
('b876f606-00ef-4586-81c2-82d3fe69e97d', 'Trawienie białek', 2),
('b876f606-00ef-4586-81c2-82d3fe69e97d', 'Trawienie tłuszczów', 3),
('b876f606-00ef-4586-81c2-82d3fe69e97d', 'Wchłanianie w jelicie cienkim', 4),
('b876f606-00ef-4586-81c2-82d3fe69e97d', 'Rola wątroby w metabolizmie', 5),
('b876f606-00ef-4586-81c2-82d3fe69e97d', 'Jelito grube i mikrobiom', 6),
('b876f606-00ef-4586-81c2-82d3fe69e97d', 'Budowa nerek i nefronów', 7),
('b876f606-00ef-4586-81c2-82d3fe69e97d', 'Powstawanie moczu', 8),
('b876f606-00ef-4586-81c2-82d3fe69e97d', 'Regulacja wydalania', 9)
ON CONFLICT (topic_id, name) DO NOTHING;

-- Topic 11: Fizjologia człowieka — układ nerwowy i hormonalny
INSERT INTO subtopics (topic_id, name, order_index) VALUES
('a4962fbb-433e-47f2-a241-1562fc6ecae4', 'Budowa neuronu', 1),
('a4962fbb-433e-47f2-a241-1562fc6ecae4', 'Potencjał czynnościowy', 2),
('a4962fbb-433e-47f2-a241-1562fc6ecae4', 'Synapsy i neuroprzekaźniki', 3),
('a4962fbb-433e-47f2-a241-1562fc6ecae4', 'Podział układu nerwowego', 4),
('a4962fbb-433e-47f2-a241-1562fc6ecae4', 'Mózgowie — budowa i funkcje', 5),
('a4962fbb-433e-47f2-a241-1562fc6ecae4', 'Łuk odruchowy', 6),
('a4962fbb-433e-47f2-a241-1562fc6ecae4', 'Gruczoły dokrewne i hormony', 7),
('a4962fbb-433e-47f2-a241-1562fc6ecae4', 'Regulacja glikemii', 8),
('a4962fbb-433e-47f2-a241-1562fc6ecae4', 'Oś podwzgórze-przysadka', 9),
('a4962fbb-433e-47f2-a241-1562fc6ecae4', 'Homeostaza hormonalna', 10)
ON CONFLICT (topic_id, name) DO NOTHING;

-- Topic 12: Układ ruchu człowieka
INSERT INTO subtopics (topic_id, name, order_index) VALUES
('42b3edde-2027-4bbb-8a90-38568031d9b0', 'Tkanka kostna', 1),
('42b3edde-2027-4bbb-8a90-38568031d9b0', 'Kości i ich połączenia', 2),
('42b3edde-2027-4bbb-8a90-38568031d9b0', 'Budowa stawu', 3),
('42b3edde-2027-4bbb-8a90-38568031d9b0', 'Tkanka mięśniowa', 4),
('42b3edde-2027-4bbb-8a90-38568031d9b0', 'Mechanizm skurczu mięśnia', 5),
('42b3edde-2027-4bbb-8a90-38568031d9b0', 'Zmęczenie mięśni', 6),
('42b3edde-2027-4bbb-8a90-38568031d9b0', 'Choroby układu ruchu', 7)
ON CONFLICT (topic_id, name) DO NOTHING;

-- Topic 13: Narządy zmysłów
INSERT INTO subtopics (topic_id, name, order_index) VALUES
('3e133173-98dd-4ca6-a35a-fbc388646354', 'Budowa i funkcja oka', 1),
('3e133173-98dd-4ca6-a35a-fbc388646354', 'Fotoreceptory — czopki i pręciki', 2),
('3e133173-98dd-4ca6-a35a-fbc388646354', 'Wady wzroku', 3),
('3e133173-98dd-4ca6-a35a-fbc388646354', 'Budowa i funkcja ucha', 4),
('3e133173-98dd-4ca6-a35a-fbc388646354', 'Słyszenie i równowaga', 5),
('3e133173-98dd-4ca6-a35a-fbc388646354', 'Chemoreceptory', 6),
('3e133173-98dd-4ca6-a35a-fbc388646354', 'Receptory skórne', 7)
ON CONFLICT (topic_id, name) DO NOTHING;

-- Topic 14: Układ powłokowy i termoregulacja
INSERT INTO subtopics (topic_id, name, order_index) VALUES
('c5770794-1a0d-4d45-83b5-c9f9f01a17a4', 'Budowa skóry', 1),
('c5770794-1a0d-4d45-83b5-c9f9f01a17a4', 'Funkcje i ochrona skóry', 2),
('c5770794-1a0d-4d45-83b5-c9f9f01a17a4', 'Przydatki skóry', 3),
('c5770794-1a0d-4d45-83b5-c9f9f01a17a4', 'Termoregulacja', 4),
('c5770794-1a0d-4d45-83b5-c9f9f01a17a4', 'Regulacja termoregulacji', 5),
('c5770794-1a0d-4d45-83b5-c9f9f01a17a4', 'Witamina D', 6)
ON CONFLICT (topic_id, name) DO NOTHING;

-- Topic 15: Rozmnażanie i rozwój człowieka
INSERT INTO subtopics (topic_id, name, order_index) VALUES
('9318fe27-0bc0-48da-921d-bef5291289fe', 'Układ rozrodczy żeński', 1),
('9318fe27-0bc0-48da-921d-bef5291289fe', 'Cykl menstruacyjny', 2),
('9318fe27-0bc0-48da-921d-bef5291289fe', 'Układ rozrodczy męski', 3),
('9318fe27-0bc0-48da-921d-bef5291289fe', 'Spermatogeneza i owogeneza', 4),
('9318fe27-0bc0-48da-921d-bef5291289fe', 'Zapłodnienie i wczesny rozwój', 5),
('9318fe27-0bc0-48da-921d-bef5291289fe', 'Ciąża i rozwój płodu', 6),
('9318fe27-0bc0-48da-921d-bef5291289fe', 'Poród i laktacja', 7),
('9318fe27-0bc0-48da-921d-bef5291289fe', 'Regulacja hormonalna rozrodu', 8)
ON CONFLICT (topic_id, name) DO NOTHING;

-- Topic 16: Ekologia
INSERT INTO subtopics (topic_id, name, order_index) VALUES
('27daaa5f-30d8-4519-a525-4b136cad02f2', 'Ekosystem — struktura', 1),
('27daaa5f-30d8-4519-a525-4b136cad02f2', 'Łańcuchy i sieci pokarmowe', 2),
('27daaa5f-30d8-4519-a525-4b136cad02f2', 'Przepływ energii', 3),
('27daaa5f-30d8-4519-a525-4b136cad02f2', 'Obieg materii', 4),
('27daaa5f-30d8-4519-a525-4b136cad02f2', 'Populacja — cechy i dynamika', 5),
('27daaa5f-30d8-4519-a525-4b136cad02f2', 'Zależności międzygatunkowe', 6),
('27daaa5f-30d8-4519-a525-4b136cad02f2', 'Sukcesja ekologiczna', 7),
('27daaa5f-30d8-4519-a525-4b136cad02f2', 'Biomy', 8),
('27daaa5f-30d8-4519-a525-4b136cad02f2', 'Ochrona przyrody', 9)
ON CONFLICT (topic_id, name) DO NOTHING;

-- Topic 17: Ewolucja
INSERT INTO subtopics (topic_id, name, order_index) VALUES
('425b03ca-900e-482a-8ca2-7b2d7de4beab', 'Historia ewolucjonizmu', 1),
('425b03ca-900e-482a-8ca2-7b2d7de4beab', 'Dobór naturalny', 2),
('425b03ca-900e-482a-8ca2-7b2d7de4beab', 'Dowody ewolucji', 3),
('425b03ca-900e-482a-8ca2-7b2d7de4beab', 'Mechanizmy ewolucji', 4),
('425b03ca-900e-482a-8ca2-7b2d7de4beab', 'Dryf genetyczny', 5),
('425b03ca-900e-482a-8ca2-7b2d7de4beab', 'Specjacja', 6),
('425b03ca-900e-482a-8ca2-7b2d7de4beab', 'Ewolucja człowieka', 7),
('425b03ca-900e-482a-8ca2-7b2d7de4beab', 'Historia życia na Ziemi', 8),
('425b03ca-900e-482a-8ca2-7b2d7de4beab', 'Koewolucja', 9)
ON CONFLICT (topic_id, name) DO NOTHING;

-- Topic 18: Biotechnologia
INSERT INTO subtopics (topic_id, name, order_index) VALUES
('8abfb5fe-655a-44b2-910c-7ffe3ce744a1', 'Inżynieria genetyczna', 1),
('8abfb5fe-655a-44b2-910c-7ffe3ce744a1', 'PCR i elektroforeza', 2),
('8abfb5fe-655a-44b2-910c-7ffe3ce744a1', 'Klonowanie genów', 3),
('8abfb5fe-655a-44b2-910c-7ffe3ce744a1', 'Organizmy GMO', 4),
('8abfb5fe-655a-44b2-910c-7ffe3ce744a1', 'Biotechnologia medyczna', 5),
('8abfb5fe-655a-44b2-910c-7ffe3ce744a1', 'Diagnostyka molekularna', 6),
('8abfb5fe-655a-44b2-910c-7ffe3ce744a1', 'Fermentacja przemysłowa', 7),
('8abfb5fe-655a-44b2-910c-7ffe3ce744a1', 'Sekwencjonowanie genomu', 8),
('8abfb5fe-655a-44b2-910c-7ffe3ce744a1', 'Bioetyka', 9)
ON CONFLICT (topic_id, name) DO NOTHING;

-- ============================================================
-- 4. Map existing questions.subtopic (text) → subtopic_id (FK)
-- ============================================================

UPDATE questions q
SET subtopic_id = s.id
FROM subtopics s
WHERE s.topic_id = q.topic_id
AND s.name = CASE
  -- Topic 1: Komórka i biochemia
  WHEN q.topic_id = 'c4346b31-355b-4817-9e66-22cf36d4c993' THEN CASE q.subtopic
    WHEN 'błona komórkowa'        THEN 'Budowa błony komórkowej i transport'
    WHEN 'transport przez błonę'  THEN 'Budowa błony komórkowej i transport'
    WHEN 'chloroplasty'           THEN 'Organelle komórkowe'
    WHEN 'mitochondria'           THEN 'Organelle komórkowe'
    WHEN 'synteza białek'         THEN 'Organelle komórkowe'
    WHEN 'enzymy'                 THEN 'Białka i enzymy'
    WHEN 'glikoliza'              THEN 'Oddychanie komórkowe — glikoliza i fermentacja'
    WHEN 'cykl komórkowy'         THEN 'Cykl komórkowy i mitoza'
    WHEN 'apoptoza'               THEN 'Cykl komórkowy i mitoza'
    WHEN 'teoria endosymbiozy'    THEN 'Teoria endosymbiozy'
    ELSE NULL END
  -- Topic 2: Genetyka molekularna
  WHEN q.topic_id = '87346a24-dd63-4896-85f9-1124188982a7' THEN CASE q.subtopic
    WHEN 'budowa DNA i RNA'           THEN 'Budowa DNA i RNA'
    WHEN 'budowa RNA'                 THEN 'Budowa DNA i RNA'
    WHEN 'replikacja DNA'             THEN 'Replikacja DNA'
    WHEN 'transkrypcja'               THEN 'Transkrypcja'
    WHEN 'obróbka potranskrypcyjna'   THEN 'Obróbka potranskrypcyjna'
    WHEN 'kod genetyczny'             THEN 'Kod genetyczny'
    WHEN 'translacja'                 THEN 'Translacja'
    WHEN 'ekspresja genów u prokaryotów' THEN 'Regulacja ekspresji u prokaryotów'
    WHEN 'czynniki transkrypcyjne'    THEN 'Regulacja ekspresji u eukaryotów'
    WHEN 'regulacja ekspresji'        THEN 'Regulacja ekspresji u eukaryotów'
    ELSE NULL END
  -- Topic 3: Genetyka i dziedziczenie
  WHEN q.topic_id = '417e905f-f10b-49e8-ab02-f7042144e68b' THEN CASE q.subtopic
    WHEN 'prawa Mendla'                   THEN 'Prawa Mendla'
    WHEN 'podstawy genetyki'              THEN 'Prawa Mendla'
    WHEN 'struktura DNA'                  THEN 'Budowa DNA i podstawy genetyki'
    WHEN 'pary zasad'                     THEN 'Budowa DNA i podstawy genetyki'
    WHEN 'replikacja DNA'                 THEN 'Budowa DNA i podstawy genetyki'
    WHEN 'mejoza i rekombinacja'          THEN 'Mejoza i rekombinacja'
    WHEN 'mitoza'                         THEN 'Mejoza i rekombinacja'
    WHEN 'dziedziczenie sprzężone z płcią' THEN 'Dziedziczenie sprzężone z płcią'
    WHEN 'mutacje'                        THEN 'Mutacje — podstawy'
    ELSE NULL END
  -- Topic 4: Zmienność i mutacje
  WHEN q.topic_id = 'dbd40510-9cc5-4a56-8733-2455c18e5c76' THEN CASE q.subtopic
    WHEN 'rodzaje zmienności'                   THEN 'Rodzaje zmienności'
    WHEN 'mutacje genowe'                       THEN 'Mutacje genowe'
    WHEN 'mutacje chromosomowe'                 THEN 'Mutacje chromosomowe'
    WHEN 'aberracje chromosomów płciowych'      THEN 'Mutacje genomowe — aneuploidia'
    WHEN 'mutageny i naprawa DNA'               THEN 'Mutageny i naprawa DNA'
    WHEN 'zmienność kombinatoryczna i norma reakcji' THEN 'Zmienność kombinatoryczna'
    WHEN 'choroby genetyczne'                   THEN 'Choroby genetyczne jednogenowe'
    ELSE NULL END
  -- Topic 5: Różnorodność organizmów
  WHEN q.topic_id = 'cbd9a5e2-1dc1-471e-93a8-5c71b3068eaf' THEN CASE q.subtopic
    WHEN 'wirusy'           THEN 'Wirusy'
    WHEN 'bakterie'         THEN 'Prokaryoty — bakterie'
    WHEN 'grzyby'           THEN 'Grzyby'
    WHEN 'bezkręgowce'      THEN 'Bezkręgowce — systematyka'
    WHEN 'rośliny nasienne' THEN 'Rośliny — systematyka i ewolucja'
    ELSE NULL END
  -- Topic 6: Różnorodność roślin
  WHEN q.topic_id = '715e2a2c-9cf3-4f9f-93f9-ce3f73c6e92d' THEN CASE q.subtopic
    WHEN 'tkanki przewodzące'      THEN 'Tkanki przewodzące'
    WHEN 'budowa liścia'           THEN 'Budowa liścia'
    WHEN 'grupy systematyczne roślin' THEN 'Grupy systematyczne roślin'
    ELSE NULL END
  -- Topic 7: Różnorodność zwierząt
  WHEN q.topic_id = '5c9748bd-7732-4cf5-b855-a0d380d2d2f2' THEN CASE q.subtopic
    WHEN 'stawonogi'           THEN 'Stawonogi'
    WHEN 'adaptacje kręgowców' THEN 'Przystosowania kręgowców'
    ELSE NULL END
  -- Topic 8: Fizjologia roślin
  WHEN q.topic_id = '7f754164-1c3c-4dd5-82b1-7f1867f32b2c' THEN CASE q.subtopic
    WHEN 'fotosynteza - fazy' THEN 'Fotosynteza — fazy jasna i ciemna'
    WHEN 'rośliny C3 i C4'   THEN 'Rośliny C3, C4 i CAM'
    WHEN 'transpiracja'       THEN 'Transpiracja i gospodarka wodna'
    WHEN 'hormony roślinne'   THEN 'Hormony roślinne'
    WHEN 'kiełkowanie'        THEN 'Kiełkowanie i wzrost'
    ELSE NULL END
  -- Topic 9: Układ krążenia i oddechowy
  WHEN q.topic_id = 'cd2a88bf-ff9f-47d7-be98-db42df0f0175' THEN CASE q.subtopic
    WHEN 'praca serca'          THEN 'Budowa i praca serca'
    WHEN 'krążenie krwi'        THEN 'Naczynia krwionośne i krążenie'
    WHEN 'mechanika oddychania' THEN 'Mechanika oddychania'
    WHEN 'transport gazów'      THEN 'Transport gazów we krwi'
    WHEN 'regulacja oddychania' THEN 'Regulacja oddychania'
    ELSE NULL END
  -- Topic 10: Układ pokarmowy i wydalniczy
  WHEN q.topic_id = 'b876f606-00ef-4586-81c2-82d3fe69e97d' THEN CASE q.subtopic
    WHEN 'trawienie węglowodanów' THEN 'Trawienie węglowodanów'
    WHEN 'trawienie tłuszczów'    THEN 'Trawienie tłuszczów'
    WHEN 'wchłanianie substancji' THEN 'Wchłanianie w jelicie cienkim'
    WHEN 'funkcje wątroby'        THEN 'Rola wątroby w metabolizmie'
    WHEN 'budowa nerki'           THEN 'Budowa nerek i nefronów'
    ELSE NULL END
  -- Topic 11: Układ nerwowy i hormonalny
  WHEN q.topic_id = 'a4962fbb-433e-47f2-a241-1562fc6ecae4' THEN CASE q.subtopic
    WHEN 'potencjał czynnościowy'   THEN 'Potencjał czynnościowy'
    WHEN 'synapsy'                  THEN 'Synapsy i neuroprzekaźniki'
    WHEN 'podział układu nerwowego' THEN 'Podział układu nerwowego'
    WHEN 'hormony nadnerczy'        THEN 'Gruczoły dokrewne i hormony'
    WHEN 'regulacja glikemii'       THEN 'Regulacja glikemii'
    ELSE NULL END
  -- Topic 12: Układ ruchu
  WHEN q.topic_id = '42b3edde-2027-4bbb-8a90-38568031d9b0' THEN CASE q.subtopic
    WHEN 'tkanka kostna'    THEN 'Tkanka kostna'
    WHEN 'połączenia kości' THEN 'Kości i ich połączenia'
    WHEN 'mechanizm skurczu' THEN 'Mechanizm skurczu mięśnia'
    ELSE NULL END
  -- Topic 13: Narządy zmysłów
  WHEN q.topic_id = '3e133173-98dd-4ca6-a35a-fbc388646354' THEN CASE q.subtopic
    WHEN 'budowa oka'          THEN 'Budowa i funkcja oka'
    WHEN 'fotoreceptory'       THEN 'Fotoreceptory — czopki i pręciki'
    WHEN 'mechanizm słyszenia' THEN 'Budowa i funkcja ucha'
    ELSE NULL END
  -- Topic 14: Układ powłokowy
  WHEN q.topic_id = 'c5770794-1a0d-4d45-83b5-c9f9f01a17a4' THEN CASE q.subtopic
    WHEN 'budowa skóry'   THEN 'Budowa skóry'
    WHEN 'funkcje skóry'  THEN 'Funkcje i ochrona skóry'
    WHEN 'termoregulacja' THEN 'Termoregulacja'
    ELSE NULL END
  -- Topic 15: Rozmnażanie i rozwój
  WHEN q.topic_id = '9318fe27-0bc0-48da-921d-bef5291289fe' THEN CASE q.subtopic
    WHEN 'cykl menstruacyjny'       THEN 'Cykl menstruacyjny'
    WHEN 'gametogeneza'             THEN 'Spermatogeneza i owogeneza'
    WHEN 'zapłodnienie i implantacja' THEN 'Zapłodnienie i wczesny rozwój'
    ELSE NULL END
  -- Topic 16: Ekologia
  WHEN q.topic_id = '27daaa5f-30d8-4519-a525-4b136cad02f2' THEN CASE q.subtopic
    WHEN 'łańcuchy pokarmowe'       THEN 'Łańcuchy i sieci pokarmowe'
    WHEN 'przepływ energii'         THEN 'Przepływ energii'
    WHEN 'obiegi materii'           THEN 'Obieg materii'
    WHEN 'zależności międzygatunkowe' THEN 'Zależności międzygatunkowe'
    WHEN 'sukcesja ekologiczna'     THEN 'Sukcesja ekologiczna'
    ELSE NULL END
  -- Topic 17: Ewolucja
  WHEN q.topic_id = '425b03ca-900e-482a-8ca2-7b2d7de4beab' THEN CASE q.subtopic
    WHEN 'historia ewolucjonizmu' THEN 'Historia ewolucjonizmu'
    WHEN 'dobór naturalny'        THEN 'Dobór naturalny'
    WHEN 'dowody ewolucji'        THEN 'Dowody ewolucji'
    WHEN 'dryf genetyczny'        THEN 'Dryf genetyczny'
    WHEN 'specjacja'              THEN 'Specjacja'
    ELSE NULL END
  -- Topic 18: Biotechnologia
  WHEN q.topic_id = '8abfb5fe-655a-44b2-910c-7ffe3ce744a1' THEN CASE q.subtopic
    WHEN 'enzymy restrykcyjne'  THEN 'Inżynieria genetyczna'
    WHEN 'inżynieria genetyczna' THEN 'Inżynieria genetyczna'
    WHEN 'PCR'                   THEN 'PCR i elektroforeza'
    WHEN 'techniki molekularne'  THEN 'PCR i elektroforeza'
    WHEN 'fermentacja'           THEN 'Fermentacja przemysłowa'
    ELSE NULL END
  ELSE NULL
END;

-- ============================================================
-- 5. Map mock_questions.subtopic (text) → subtopic_id (FK)
--    Uses subtopic names which are globally unique
-- ============================================================

UPDATE mock_questions mq
SET subtopic_id = s.id
FROM subtopics s
WHERE s.name = CASE mq.subtopic
  WHEN 'podział komórkowy'   THEN 'Cykl komórkowy i mitoza'
  WHEN 'metabolizm komórkowy' THEN 'Oddychanie komórkowe — glikoliza i fermentacja'
  WHEN 'genetyka kliniczna'  THEN 'Choroby genetyczne jednogenowe'
  WHEN 'przepływ energii'    THEN 'Przepływ energii'
  WHEN 'wydalanie'           THEN 'Powstawanie moczu'
  WHEN 'mikrobiologia'       THEN 'Prokaryoty — bakterie'
  WHEN 'fotosynteza'         THEN 'Fotosynteza — fazy jasna i ciemna'
  WHEN 'immunologia'         THEN 'Układ limfatyczny i odporność'
  WHEN 'ewolucja'            THEN 'Dobór naturalny'
  WHEN 'hormony'             THEN 'Gruczoły dokrewne i hormony'
  ELSE NULL
END;

-- ============================================================
-- Verify results
-- ============================================================
SELECT
  (SELECT count(*) FROM subtopics) as subtopics_created,
  (SELECT count(*) FROM questions WHERE subtopic_id IS NOT NULL) as questions_mapped,
  (SELECT count(*) FROM questions WHERE subtopic_id IS NULL) as questions_unmapped,
  (SELECT count(*) FROM mock_questions WHERE subtopic_id IS NOT NULL) as mock_mapped,
  (SELECT count(*) FROM mock_questions WHERE subtopic_id IS NULL) as mock_unmapped;
