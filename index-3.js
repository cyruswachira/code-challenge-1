function totalNetSalary(basicSalary , benefits){

    let taxThreshold=24000
    let taxRate=0.3
    let nhifRate=0.025
    let nssfRate=0.06

    let grossSalary=basicSalary+benefits

    let taxableIncome=Math.max(0,grossSalary-taxThreshold)
    let tax=taxableIncome > 0 ?taxableIncome * taxRate :0 ;

    let nhifDeductions=basicSalary * nhifRate

    let nssfDeductions=basicSalary * nssfRate

    let netSalary=grossSalary - tax - nhifDeductions - nssfDeductions

    return{
        'Gross Salary':grossSalary,
        'Tax':tax,
        'NHIF Deduction':nhifDeductions,
        'NSSF Deduction':nssfDeductions,
        'Net salary':netSalary
        
    }
    
}

totalNetSalary(25000,10000)