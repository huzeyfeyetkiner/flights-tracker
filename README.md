# Schiphol Flights Application

This is a flight tracking application that fetches flight data from Schiphol Airport's API and displays it to users. The app allows users to filter flights based on schedule date and flight direction. Additionally, users can view and manage their favorite flights.

## Features

-   Display flight information based on date.
-   Filter flights by arrival direction.
-   Save favorite flights in a user-friendly manner.
-   Display related travel services (e.g., car rental, hotel search, travel packages).

## Technologies

-   **Next.js**: React framework used for server-side rendering and routing.
-   **TypeScript**: Type-safe development.
-   **Tailwind CSS**: Utility-first CSS framework for styling.
-   **API Integration**: Fetch data from Schiphol public flights API.
-   **Date-fns**: Utility library for date manipulation.
-   **Context API**: Manage user-specific flight data globally.

## Installation

### 1. Repository'yi klonlayın:

```bash
git clone https://github.com/yourusername/schiphol-flights.git
cd schiphol-flights
```

### 2. Gerekli bağımlılıkları yükleyin:

```bash
npm install
# veya
yarn install
```

### 3. Environment Variables (.env) dosyasını oluşturun:

Projenin kök dizininde bir `.env` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:

```bash
API_URL="https://api.schiphol.nl/public-flights/flights"
API_KEY="your-api-key-here"
APP_ID="your-app-id-here"
```

`your-api-key-here` ve `your-app-id-here` kısımlarını kendi Schiphol API bilgileriniz ile değiştirin.

### 4. Uygulamayı çalıştırın:

Projenizi yerel ortamda çalıştırmak için aşağıdaki komutu kullanın:

```bash
npm run dev
# veya
yarn dev
```

Uygulama `http://localhost:3000` adresinde kullanılabilir olacaktır.
