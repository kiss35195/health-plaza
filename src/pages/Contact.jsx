function Contact() {
  return (
    <div className="justify-cente flex h-full w-full flex-col items-center p-4">
      <div>Made by Kiss Lu.</div>
      <div className="pt-2 pb-7">+886 912345678</div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451.86239098781414!2d121.56322862936095!3d25.037497099999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb767a18a7d%3A0xc0f5f77c329ce2e7!2z5Y-w5YyX5biC5pS_5bqc5YmN5buj5aC0!5e0!3m2!1szh-TW!2stw!4v1785854518480!5m2!1szh-TW!2stw"
        width="80%"
        height="80%"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default Contact;
