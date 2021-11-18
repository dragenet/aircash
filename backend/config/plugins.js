module.exports = ({ env }) => ({
    email: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'mailhog'),
        port: env('SMTP_PORT', 1025),
      },
      settings: {
        defaultFrom: 'noreply@example.strapi.local',
        defaultReplyTo: 'noreply@example.strapi.local',
      },
    },
  });