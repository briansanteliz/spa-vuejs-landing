CREATE DATABASE `spa-agencia`;


CREATE TABLE `testimonios` (
    `id` int(11) NOT NULL,
    `nombre` varchar(60) NOT NULL,
    `correo` varchar(40) NOT NULL,
    `mensaje` longtext NOT NULL
);

ALTER TABLE `testimonios`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `testimonios`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;