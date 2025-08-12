# 🎃 Notifier - Envío de Correos para Fiesta de Halloween

## 📌 Descripción

**Notifier** es una aplicación construida con **NestJS** cuyo único propósito es **automatizar el envío de correos** a los participantes inscritos en una **fiesta de Halloween**.  Como no encontré ninguna aplicación de uso libre que lo hiciera de forma masiva, hice una propia.

El flujo es simple:
1. Las personas completan un **Google Form** para inscribirse en el evento.
2. Las respuestas se exportan como un **archivo Excel (.xlsx)**.
3. **Notifier** procesa el archivo, extrae las direcciones de correo y otros datos relevantes.
4. Envía un correo personalizado a cada participante con **información de pago, instrucciones y confirmación de asistencia**.

---

## 🚀 Características
- 📂 **Procesa Excel** exportado desde Google Forms.
- 📧 **Envía correos masivos** personalizados con `nodemailer`.
- 🔒 Variables de entorno para credenciales seguras.
- 🛠️ Proyecto modular con **NestJS** para fácil mantenimiento.
- 🎨 Plantillas HTML para correos personalizables.

---


## ⚙️ Requisitos Previos
- Node.js >= 22
- npm >= 10
- Cuenta de correo (se recomienda Gmail con **App Password** habilitado)
- Archivo Excel exportado desde Google Forms

---

## ⚙️ Configuración
1. **Clonar el repositorio**
```bash
git clone https://github.com/crisortegamunoz/Notifier.git
cd notifier
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
MAIL_USER=tu_correo@gmail.com
MAIL_PASS=tu_contraseña_o_app_password
```

> **Nota:** Si usas Gmail y tienes activada la verificación en dos pasos, deberás generar una **App Password** desde tu cuenta de Google.

4. **Cargar archivo HTML de plantilla**
El archivo `halloween_alone.html` y `halloween_accompanied.html` deben estar dentro de `src/common/templates` e incluir un marcador `[name]` en caso de halloween_alone y `[name]`, `[accompanied]` en halloween_accompanied, estos serán reemplazado dinámicamente con el nombre de cada participante y/o acompañante.

---

## 📤 Uso
1. Sube el archivo Excel con los registros exportados desde Google Forms.
2. El sistema leerá los nombres y correos electrónicos.
3. Se reemplazará `[name]` y/o `[accompanied]` en las plantillas correspondiente.
4. Se enviará el correo a cada participante.

---

## 📦 Ejecución
```bash
npm run start
```

---

## 🛠 Tecnologías
- **NestJS**
- **Nodemailer**
- **xlsx**
- **dotenv**
- **validator**

---

## 📜 Licencia
Este proyecto es de uso interno para la organización de eventos y no tiene fines comerciales.
