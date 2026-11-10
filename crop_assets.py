import os
from PIL import Image

src_path = 'C:/Users/Kamal/.gemini/antigravity/brain/cba56f9e-6ffd-4b30-8560-040bf9e8a7de/.user_uploaded/media_1794301205505_5c1e26a8.jpg'
img = Image.open(src_path)
w, h = img.size
print(f"Master image size: {w}x{h}")

os.makedirs('public/assets', exist_ok=True)
os.makedirs('src/assets', exist_ok=True)

# Coordinates based on 682 x 1024 master image
# 1. Logo
logo = img.crop((32, 5, 96, 62))
logo = logo.resize((logo.width * 2, logo.height * 2), Image.Resampling.LANCZOS)
logo.save('public/assets/logo.png')
logo.save('public/logo.png')

# 2. Hero Mascot with log pedestal, chocolate & beans
mascot = img.crop((340, 42, 630, 245))
mascot = mascot.resize((mascot.width * 2, mascot.height * 2), Image.Resampling.LANCZOS)
mascot.save('public/assets/mascot.png')

# 3. Steps (Pour, Sip, Crunch) in Section 2 (y roughly 270 to 400)
# Pour: cup + jug pouring coffee
step_pour = img.crop((210, 280, 325, 395))
step_pour = step_pour.resize((step_pour.width * 2, step_pour.height * 2), Image.Resampling.LANCZOS)
step_pour.save('public/assets/step-pour.png')

# Sip: cup filled with latte art
step_sip = img.crop((370, 295, 470, 395))
step_sip = step_sip.resize((step_sip.width * 2, step_sip.height * 2), Image.Resampling.LANCZOS)
step_sip.save('public/assets/step-sip.png')

# Crunch: cup with bite taken out
step_crunch = img.crop((520, 295, 625, 395))
step_crunch = step_crunch.resize((step_crunch.width * 2, step_crunch.height * 2), Image.Resampling.LANCZOS)
step_crunch.save('public/assets/step-crunch.png')

# 4. Our Flavours row (y roughly 420 to 535)
# Chocolate: x ~ 180 to 258
flav_choc = img.crop((175, 420, 260, 528))
flav_choc = flav_choc.resize((flav_choc.width * 2, flav_choc.height * 2), Image.Resampling.LANCZOS)
flav_choc.save('public/assets/flavour-chocolate.png')

# Mango: x ~ 258 to 335
flav_mango = img.crop((258, 420, 335, 528))
flav_mango = flav_mango.resize((flav_mango.width * 2, flav_mango.height * 2), Image.Resampling.LANCZOS)
flav_mango.save('public/assets/flavour-mango.png')

# Vanilla: x ~ 335 to 415
flav_vanilla = img.crop((335, 420, 415, 528))
flav_vanilla = flav_vanilla.resize((flav_vanilla.width * 2, flav_vanilla.height * 2), Image.Resampling.LANCZOS)
flav_vanilla.save('public/assets/flavour-vanilla.png')

# Strawberry: x ~ 415 to 495
flav_straw = img.crop((415, 420, 495, 528))
flav_straw = flav_straw.resize((flav_straw.width * 2, flav_straw.height * 2), Image.Resampling.LANCZOS)
flav_straw.save('public/assets/flavour-strawberry.png')

# Elaichi: x ~ 495 to 572
flav_elaichi = img.crop((495, 420, 572, 528))
flav_elaichi = flav_elaichi.resize((flav_elaichi.width * 2, flav_elaichi.height * 2), Image.Resampling.LANCZOS)
flav_elaichi.save('public/assets/flavour-elaichi.png')

# Pista: x ~ 572 to 650
flav_pista = img.crop((572, 420, 650, 528))
flav_pista = flav_pista.resize((flav_pista.width * 2, flav_pista.height * 2), Image.Resampling.LANCZOS)
flav_pista.save('public/assets/flavour-pista.png')

# Full flavour showcase strip
flav_strip = img.crop((170, 420, 655, 532))
flav_strip = flav_strip.resize((flav_strip.width * 2, flav_strip.height * 2), Image.Resampling.LANCZOS)
flav_strip.save('public/assets/flavours-all.png')

# 5. Sustainability Section (y roughly 530 to 640)
# Earth globe with ring of grain particles
earth = img.crop((15, 532, 195, 642))
earth = earth.resize((earth.width * 2, earth.height * 2), Image.Resampling.LANCZOS)
earth.save('public/assets/earth-sustainability.png')

# 6. About Section & Social Proof (y roughly 645 to 770)
# Hands holding biscuit cup
lifestyle_cup = img.crop((0, 646, 240, 772))
lifestyle_cup = lifestyle_cup.resize((lifestyle_cup.width * 2, lifestyle_cup.height * 2), Image.Resampling.LANCZOS)
lifestyle_cup.save('public/assets/lifestyle-holding-cup.png')

# Loved by Many - Customer 1 (sipping woman)
cust_1 = img.crop((415, 678, 485, 752))
cust_1 = cust_1.resize((cust_1.width * 2, cust_1.height * 2), Image.Resampling.LANCZOS)
cust_1.save('public/assets/customer-1.png')

# Loved by Many - Customer 2 (smiling man)
cust_2 = img.crop((492, 678, 562, 752))
cust_2 = cust_2.resize((cust_2.width * 2, cust_2.height * 2), Image.Resampling.LANCZOS)
cust_2.save('public/assets/customer-2.png')

# Loved by Many - Customer 3 (friends group)
cust_3 = img.crop((568, 678, 650, 752))
cust_3 = cust_3.resize((cust_3.width * 2, cust_3.height * 2), Image.Resampling.LANCZOS)
cust_3.save('public/assets/customer-3.png')

# 7. Occasions Section (y roughly 775 to 870)
# Cafes & Restaurants
occ_cafes = img.crop((198, 778, 290, 860))
occ_cafes = occ_cafes.resize((occ_cafes.width * 2, occ_cafes.height * 2), Image.Resampling.LANCZOS)
occ_cafes.save('public/assets/occasion-cafes.png')

# Weddings & Events
occ_weddings = img.crop((297, 778, 415, 860))
occ_weddings = occ_weddings.resize((occ_weddings.width * 2, occ_weddings.height * 2), Image.Resampling.LANCZOS)
occ_weddings.save('public/assets/occasion-weddings.png')

# Corporate Events
occ_corporate = img.crop((418, 778, 545, 860))
occ_corporate = occ_corporate.resize((occ_corporate.width * 2, occ_corporate.height * 2), Image.Resampling.LANCZOS)
occ_corporate.save('public/assets/occasion-corporate.png')

# Gifting
occ_gifting = img.crop((550, 778, 655, 860))
occ_gifting = occ_gifting.resize((occ_gifting.width * 2, occ_gifting.height * 2), Image.Resampling.LANCZOS)
occ_gifting.save('public/assets/occasion-gifting.png')

# 8. Chocolate chunk decorative accent (bottom right y ~ 880 to 935)
choc_decor = img.crop((560, 882, 670, 935))
choc_decor = choc_decor.resize((choc_decor.width * 2, choc_decor.height * 2), Image.Resampling.LANCZOS)
choc_decor.save('public/assets/decor-chocolate.png')

# Also copy all to src/assets
for file in os.listdir('public/assets'):
    src = os.path.join('public/assets', file)
    dst = os.path.join('src/assets', file)
    with open(src, 'rb') as f_in, open(dst, 'wb') as f_out:
        f_out.write(f_in.read())

print("Successfully cropped and prepared all 18 authentic assets!")

