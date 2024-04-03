

function calculateSalary(basicSalary, benefits) {
    // Constants for tax rates and deductions

    // Tax threshold for the year
    const taxThreshold = 24000;  
    // Tax rate (30%)
    const taxRate = 0.3; 
    // NHIF rate (2.5%) 
    const nhifRate = 0.025; 
    // NSSF rate (6%) 
    const nssfRate = 0.06;  

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate tax
    const taxableIncome = Math.max(0, grossSalary - taxThreshold);
    const tax = taxableIncome > 0 ? taxableIncome * taxRate : 0;

    // Calculate NHIF deductions
    const nhifDeductions = basicSalary * nhifRate;

    // Calculate NSSF deductions
    const nssfDeductions = basicSalary * nssfRate;

    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    return {

        "Net Salary": netSalary}
    
}

console.log(calculateSalary(100000,25000));