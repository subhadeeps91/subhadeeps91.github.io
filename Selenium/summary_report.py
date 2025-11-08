import matplotlib.pyplot as plt

labels = ['test_github_site.py (Passed)', 'minimal.py (Passed)', 'Mobile_emulation.py (Failed)']
sizes = [1, 1, 1]
colors = ['#4CAF50', '#4CAF50', '#F44336']

plt.style.use('seaborn-v0_8')
fig, ax = plt.subplots()
ax.pie(sizes, labels=labels, colors=colors, autopct='%1.1f%%', startangle=140)
ax.set_title('Selenium Test Script Results')
plt.savefig("selenium_test_results_pie.png")
