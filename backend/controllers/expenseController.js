const xlsx = require('xlsx');
const Expense = require("../models/Expense");

// Add Expense category
exports.addExpense = async (req, res) => {
  const userId = req.user.id;

  try {
    const { icon, category, amount, date } = req.body;

    // Validate required fields
    if (!category || !amount) {
      return res.status(400).json({ message: "Category and amount are required" });
    }

    const expense = new Expense({
      userId,
      icon,
      category,
      amount,
      date: date ? new Date(date) : new Date(), // Ensures UTC format
    });

    await expense.save();

    res.status(201).json({
      message: "Expense added successfully",
      expense,
    });
  } catch (error) {
    console.error("Add Expense Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
// Get All Expense
exports.getAllExpense = async (req, res) => {
    const userId = req.user.id;

    try {
        const expense = await Expense.find({ userId }).sort({ date: -1 });
        res.json(expense);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Delete Expense
exports.deleteExpense = async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.json({ message: "Expense deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Download Expense Excel
exports.downloadExpenseExcel = async (req, res) => {
    const userId = req.user.id;

    try {
        const expense = await Expense.find({ userId }).sort({ date: -1 });

        const data = expense.map((item) => ({
            Category: item.category,
            Amount: item.amount,
            Date: item.date,
        }));

        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, "Expense");

        const filePath = 'expense_details.xlsx';
        xlsx.writeFile(wb, filePath);
        res.download(filePath);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};
