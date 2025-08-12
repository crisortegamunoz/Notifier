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

## 📦 Instalación

