// --- Supabase Configuration ---
const supabase = self.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// --- Event Listeners and Initial Setup ---
document.addEventListener("DOMContentLoaded", () => {
  // Set default date to today
  const today = new Date();
  const dateInput = document.getElementById("transactionDate");
  if (dateInput) {
    dateInput.value = today.toISOString().split("T")[0];
  }

  // Set current year in footer
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = today.getFullYear();
  }

  const form = document.getElementById("entryForm");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }
});

// --- Form Submission Handler ---
async function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const submitButton = document.getElementById("submitButton");

  // Disable button and add loading class for animations
  submitButton.disabled = true;
  submitButton.classList.add("is-loading");

  // Client-side validation
  const drugValue = parseFloat(form.drugValue.value);
  if (isNaN(drugValue) || drugValue < 0) {
    Swal.fire({
      icon: "error",
      title: "ข้อมูลไม่ถูกต้อง",
      text: "มูลค่ายาต้องเป็นตัวเลขและไม่ติดลบ",
      background: "var(--bg-card)",
      color: "var(--text-light)",
    });
    submitButton.disabled = false;
    submitButton.classList.remove("is-loading");
    return;
  }

  const recordToSave = {
    transaction_date: form.transactionDate.value,
    bill_number: form.billNumber.value,
    drug_type: form.drugType.value,
    drug_value: drugValue,
  };

  try {
    const { error } = await supabase
      .from("med_transactions")
      .insert([recordToSave]);
    if (error) {
      // หากเกิด error จาก Supabase
      throw error;
    }

    // หากสำเร็จ
    Swal.fire({
      icon: "success",
      title: "สำเร็จ!",
      text: "บันทึกข้อมูลสำเร็จ",
      timer: 2000,
      showConfirmButton: false,
      position: "center",
      background: "var(--bg-card)",
      color: "var(--text-light)",
    });

    form.reset();
    document.getElementById("transactionDate").value = new Date()
      .toISOString()
      .split("T")[0];
  } catch (error) {
    // จัดการ Error ที่อาจเกิดขึ้น
    console.error("Error saving data to Supabase:", error);
    Swal.fire({
      icon: "error",
      title: "เกิดข้อผิดพลาด",
      text: `ไม่สามารถบันทึกข้อมูลได้: ${error.message}`,
      background: "var(--bg-card)",
      color: "var(--text-light)",
    });
  } finally {
    // ไม่ว่าจะสำเร็จหรือล้มเหลว ให้เปิดปุ่มกลับมาใช้งานเสมอ
    submitButton.disabled = false;
    submitButton.classList.remove("is-loading");
  }
}
