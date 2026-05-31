import streamlit as st

st.set_page_config(
    page_title="Magic Lamp Review Hub",
    page_icon="🧞"
)

st.title("🧞 Magic Lamp Movie Review Hub")

movie = st.text_input("🎬 Movie Title")
review = st.text_area("📝 Write Your Review")
rating = st.slider("⭐ Rating", 1, 5)

if st.button("Submit Review"):

    score = rating * 20

    if rating >= 4:
        recommendation = "🌟 Highly Recommended!"
    elif rating == 3:
        recommendation = "👍 Worth Watching!"
    else:
        recommendation = "👎 Not Recommended!"

    st.success("Review Submitted!")

    st.write("### 📋 Review Summary")
    st.write("🎬 Movie:", movie)
    st.write("📝 Review:", review)
    st.write("⭐ Rating:", "⭐" * rating)
    st.write("📊 Score:", f"{score}/100")

    st.write("### 🧞 Recommendation")
    st.write(recommendation)