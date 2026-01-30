# User Management App

Aplicación fullstack para la gestión de usuarios, construida con **Spring Boot** en el backend y **React + TypeScript + Tailwind CSS** en el frontend.

---

## Stack Usado

**Backend**
- Java 21
- Spring Boot 3.4.1
- Spring Data JPA + Hibernate
- MySQL / H2 (para pruebas)
- Validaciones con Jakarta Validation
- CORS configurado para permitir frontend en `localhost:3000`

**Frontend**
- React 18 + TypeScript
- Tailwind CSS
- Fetch API para comunicación con el backend
- Componentes reutilizables: `Table`, `ModalForm`, `Navbar`, `Dashboard`

---

## Funcionalidades

### Backend
- CRUD completo para la entidad **User**
    - `GET /users` → Listar usuarios
    - `POST /users` → Crear usuario
    - `PUT /users/{id}` → Actualizar usuario
    - `DELETE /users/{id}` → Eliminar usuario
- Validaciones de nombre y email
- Manejo de errores básicos
- CORS habilitado para frontend en desarrollo

### Frontend
- Dashboard interactivo con tabla de usuarios
- Modal para crear y editar usuarios
- Botones de eliminar con confirmación
- Manejo de errores en peticiones al backend
- Interfaz minimalista, limpia y profesional (colores suaves, estilo nórdico)
- Responsive y accesible

---

## 🎨 Estilo y UX

- Colores neutros y suaves (grises claros, blancos, tonos pastel)
- Tipografía limpia y legible
- Diseño escandinavo: minimalismo, claridad y enfoque en datos
- Componentes con hover y focus states para mejorar la experiencia de usuario

---

## 🚀 Instalación y Ejecución

### Backend (Spring Boot)

1. Clonar el repositorio o descargarlo
2. Configurar application.properties:
```bash
spring.datasource.url=jdbc:mysql://localhost:3306/tu_db
spring.datasource.username=root
spring.datasource.password=tu_password
spring.jpa.hibernate.ddl-auto=update
```

3. Ejecutar la aplicación:
```bash
mvn spring-boot:run
```

### Frontend (React + TypeScript)

1. Entrar en la carpeta del frontend:

```bash
cd <nombre-del-proyecto>/frontend
```
2. Instalar dependencias:

```bash
npm install
```
3. Ejecutar el servidor de desarrollo:
```bash
npm start
```
Frontend disponible en: http://localhost:3000

Nota: El frontend consume la API en http://localhost:8080/users. Asegúrate de que el backend esté corriendo y CORS esté habilitado.

### Estructura
```bash
src/
├─ components/
│    ├─ Navbar.tsx
│    ├─ Table.tsx
│    ├─ ModalForm.tsx
├─ pages/
│    └─ Dashboard.tsx
├─ services/
│    └─ api.ts
├─ App.tsx
└─ index.tsx
```