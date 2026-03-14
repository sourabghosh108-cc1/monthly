income = float(input("Enter monthly income: "))

rent = float(input("Enter rent expense: "))
utilities = float(input("Enter utilities expense: "))

fixed_total = rent + utilities

variable_total = 0
num = int(input("Number of variable expenses: "))

for i in range(num):
    expense = float(input("Enter variable expense: "))
    variable_total += expense

total_expenses = fixed_total + variable_total
remaining = income - total_expenses

if remaining > 0:
    print("Remaining budget:", remaining)
else:
    print("You exceeded your budget by", abs(remaining))
