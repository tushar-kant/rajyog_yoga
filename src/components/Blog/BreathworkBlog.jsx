import React from 'react';
import img from '../../img/Yoga/img14.jpeg'

function BreathworkBlog() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Blog Header */}
        <div className="bg-green-100 p-8 rounded-lg shadow-xl mb-12">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">
            How to Use Breathwork to Reduce Anxiety Instantly
          </h2>
          <p className="text-xl text-center text-gray-600 leading-relaxed">
            Breathwork is a powerful tool for managing anxiety, allowing you to calm your mind and body quickly. When we’re anxious, our breath tends to become shallow and rapid, which can intensify feelings of stress. By practicing intentional, controlled breathing, we can reverse this response, tapping into the body’s natural relaxation system. Here’s how to use simple breathwork techniques to reduce anxiety instantly.
          </p>
        </div>

        {/* Blog Content */}
        <div className="space-y-12">
          {/* Box Breathing */}
          <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="lg:w-1/2 p-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">1. Box Breathing</h3>
              <p className="text-lg text-gray-600 mb-4"><strong>How to Do It:</strong> Inhale deeply through your nose for a count of four, hold your breath for another count of four, exhale through your mouth for four, and pause for four. Repeat several rounds.</p>
              <p className="text-lg text-gray-600"><strong>Why It Works:</strong> This technique creates a calming rhythm that reduces anxiety by engaging the parasympathetic nervous system. The structured counting also distracts from anxious thoughts.</p>
            </div>
            <div className="lg:w-1/2">
              <img src={img} alt="Box Breathing" className="w-full h-72 object-cover" />
            </div>
          </div>

          {/* 4-7-8 Breathing */}
          <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="lg:w-1/2 p-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">2. 4-7-8 Breathing</h3>
              <p className="text-lg text-gray-600 mb-4"><strong>How to Do It:</strong> Inhale through your nose for four counts, hold for seven, and exhale through your mouth for eight counts. Try to repeat this cycle four times or as needed.</p>
              <p className="text-lg text-gray-600"><strong>Why It Works:</strong> The extended exhale activates the vagus nerve, helping to reduce the heart rate and bring about a sense of calm. This technique is especially useful if you’re feeling overwhelmed or struggling to focus.</p>
            </div>
            <div className="lg:w-1/2">
              <img src={img}  alt="4-7-8 Breathing" className="w-full h-72 object-cover" />
            </div>
          </div>

          {/* Diaphragmatic Breathing */}
          <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="lg:w-1/2 p-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">3. Diaphragmatic Breathing (Belly Breathing)</h3>
              <p className="text-lg text-gray-600 mb-4"><strong>How to Do It:</strong> Place one hand on your chest and the other on your belly. Inhale deeply through your nose, letting your belly expand while your chest remains still. Exhale slowly through your mouth, feeling your belly fall.</p>
              <p className="text-lg text-gray-600"><strong>Why It Works:</strong> Belly breathing encourages full oxygen exchange and lowers stress hormone levels. It can be especially grounding during moments of intense anxiety.</p>
            </div>
            <div className="lg:w-1/2">
              <img src={img}  alt="Diaphragmatic Breathing" className="w-full h-72 object-cover" />
            </div>
          </div>

          {/* Alternate Nostril Breathing */}
          <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="lg:w-1/2 p-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">4. Alternate Nostril Breathing (Nadi Shodhana)</h3>
              <p className="text-lg text-gray-600 mb-4"><strong>How to Do It:</strong> Sit comfortably, place your right thumb on your right nostril to close it, and inhale through your left nostril. Then close your left nostril with your ring finger, release your right nostril, and exhale through it. Repeat on the other side, creating a slow, rhythmic flow.</p>
              <p className="text-lg text-gray-600"><strong>Why It Works:</strong> This balancing breathwork helps harmonize the left and right hemispheres of the brain, promoting mental clarity and reducing anxiety.</p>
            </div>
            <div className="lg:w-1/2">
              <img src={img}  alt="Alternate Nostril Breathing" className="w-full h-72 object-cover" />
            </div>
          </div>

          {/* Tips for Getting the Most Out of Breathwork */}
          <div className="bg-green-100 p-8 rounded-lg shadow-lg mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">How to Get the Most Out of Breathwork</h3>
            <ul className="list-disc pl-6 space-y-4 text-lg text-gray-600">
              <li><strong>Practice in a Quiet Space:</strong> Find a peaceful spot where you won’t be disturbed. A calm environment helps maximize the relaxing effects of breathwork.</li>
              <li><strong>Focus on Sensations:</strong> Pay attention to how the air feels as it moves in and out of your body. Focusing on sensations grounds you in the present moment, helping to break cycles of anxious thinking.</li>
              <li><strong>Practice Daily:</strong> Breathwork is more effective with regular practice. Try incorporating a few minutes of breathing exercises into your daily routine to build resilience against stress.</li>
              <li><strong>Use When Needed:</strong> Once you’re familiar with these techniques, use them any time you feel anxious. Many of these exercises can be done discreetly, making them ideal for public settings.</li>
            </ul>
          </div>

          {/* Final Thoughts */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Final Thoughts</h3>
            <p className="text-lg text-gray-600">
              Breathwork offers an immediate way to reduce anxiety by shifting the body’s response to stress. By taking a few moments to slow down and focus on your breath, you can create an inner sense of calm and control, no matter what’s going on around you. Practice these techniques often, and over time, you’ll find that breathwork becomes a natural and effective way to manage anxiety.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreathworkBlog;
