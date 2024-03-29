from crontab import CronTab

# Create a new cron object for the current user
cron = CronTab(user=True)

# Add a new job that runs every minute
job = cron.new(command='python ./printHello.py', comment='PrintHelloWorld')
job.minute.every(1)

# Write the job to the crontab
cron.write()

print(f"Added job: {job}")
