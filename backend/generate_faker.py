import random
from datetime import datetime, timedelta


def random_date(start_date, end_date):
    time_between_dates = end_date - start_date
    random_number_of_days = random.randint(0, time_between_dates.days)
    random_date = start_date + timedelta(days=random_number_of_days)
    return random_date


with open('comandos_sql.sql', 'w') as file:
    lista = [] 
    for _ in range(1000):
        company_id = 4
        start_date = datetime(2021, 1, 1)
        end_date = datetime(2023, 1, 9)
        date = random_date(start_date, end_date)
        

        value = round(random.uniform(1500.50, 1000000.00), 2)
        if date not in lista:
            sql_command = f"INSERT INTO api_invoicingmodel (company_id, date, value) VALUES ({company_id}, '{date}', {value});\n"
            
            file.write(sql_command)
        lista.append(date)


