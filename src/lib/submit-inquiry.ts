export type InquiryPayload = {
  name: string;
  email: string;
  phone?: string;
  tour?: string;
  dates?: string;
  guests?: string;
  message?: string;
};

export async function submitInquiry(data: InquiryPayload): Promise<void> {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent("bikbu83@gmail.com")}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: `Новая заявка: ${data.tour || "Общий запрос"} — ${data.name}`,
      _template: "table",
      _captcha: "false",
      Имя: data.name,
      Email: data.email,
      Телефон: data.phone || "—",
      Тур: data.tour || "—",
      Даты: data.dates || "—",
      "Кол-во гостей": data.guests || "—",
      Сообщение: data.message || "—",
    }),
  });

  if (!response.ok) {
    throw new Error("Не удалось отправить заявку");
  }

  const result = (await response.json()) as { success?: string };
  if (result.success !== "true") {
    throw new Error("Ошибка отправки");
  }
}
